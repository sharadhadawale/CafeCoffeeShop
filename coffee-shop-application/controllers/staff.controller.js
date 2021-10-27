const {Staff} = require('../bll/models/staff.model');
const StaffSerivce = require('../bll/services/staff.service');

/**
 * Used for saving staff object
 * @param {*} staffRequest 
 * @param {*} staffResponse 
 * @param {*} next 
 */
exports.saveStaff = async (staffRequest, staffResponse, next) => {
    try {
        const query = { uniqueIdentifier: staffRequest.body.uniqueIdentifier }
        let staff = await StaffSerivce.findStaff(query);
        if (staff.length > 0) return staffResponse.status(400).send('RECORD_EXISTS');
        
        const savedStaff = await StaffSerivce.saveStaff(staffRequest.body);
        
        staffResponse.status(200).send({ savedStaff });

    } catch (error) {
        next(`method: saveStaff Error: ${error}`)
    }
};

