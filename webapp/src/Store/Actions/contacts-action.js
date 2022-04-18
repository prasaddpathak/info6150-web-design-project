export const ContactActionType = {
    ADD_CONTACT: "[Contact] Add contact action"
};

export const addContact = (payload) => {
    return {
        type: ContactActionType.ADD_CONTACT,
        payload
    }
};