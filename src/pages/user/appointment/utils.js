export const isFormValid = (data) => {
    const { personal, address, appointment, insurance } = data;

    // Check for Personal
    for (const key in personal) {
        if (key !== "dob" && !personal[key]) {
            return false;
        }
    }

    // Check for address
    for (const key in address) {
        if (key !== "address2" && !address[key]) {
            return false;
        }
    }

    // Check for Appointment
    for (const key in appointment) {
        if (!appointment[key]) {
            return false;
        }
    }

    // check for insurance
    if (!insurance.paymentMethod) return false;

    if (insurance.paymentMethod.toLowerCase() !== "self pay") {
        if (!insurance.insuranceName || !insurance.insuranceNumber) {
            return false;
        }
    }

    return true;
};
