export const CONSTANTS = {
    DASHBOARD_ITEMS: ["dashboard", "calendar", "report"],
    HTML_INPUT_ELEMENTS: ["email", "text"],
    GROUP_SETTINGS: [
        {
            SECTION_NAME: "basic-information",
            RADIO_OPTIONS: [],
            INITIAL_STATE: {
                client_group_name: '',
                email_id: '',
                mobile_no: '',
                address_type: '',
                premises: '',
                address_line_1: '',
                address_line_2: '',
                state: '',
                city: '',
                pincode: '',
            },
            SECTION: [
                {
                    headline: "Basic Information",
                    content: [
                        {
                            htmlFor: "client_group_name",
                            label: "Client Group Name",
                            type: "text",
                            id: "client_group_name",
                            placeholder: "Enter client group name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "email_id",
                            label: "Email ID",
                            type: "email",
                            id: "email_id",
                            placeholder: "Enter email",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "mobile_no",
                            label: "Mobile No.",
                            type: "text",
                            id: "mobile_no",
                            placeholder: "Enter mobile no",
                            required: true,
                            style: {},
                            options: []
                        }
                    ]
                },
                {
                    headline: "Address",
                    content: [
                        {
                            htmlFor: "address_type",
                            label: "Address Type",
                            type: "select",
                            id: "address_type",
                            placeholder: "Choose address type",
                            required: true,
                            style: {},
                            options: [
                                {
                                    option: "Registered Office",
                                    value: "registered_office"
                                },
                                {
                                    option: "Unregistered Office",
                                    value: "unregistered_office"
                                }
                            ]
                        },
                        {
                            htmlFor: "premises",
                            label: "Premises",
                            type: "select",
                            id: "premises",
                            placeholder: "Choose owner type",
                            required: true,
                            style: {},
                            options: [
                                {
                                    option: "Owned",
                                    value: "owned"
                                },
                                {
                                    option: "Rental",
                                    value: "rental"
                                }
                            ]
                        },
                        {
                            htmlFor: "address_line_1",
                            label: "Address Line 1",
                            type: "text",
                            id: "address_line_1",
                            placeholder: "Enter Address Line 1",
                            required: true,
                            style: { gridColumn: '3/5' },
                            options: []
                        },
                        {
                            htmlFor: "address_line_2",
                            label: "Address Line 2",
                            type: "text",
                            id: "address_line_2",
                            placeholder: "Enter Address Line 1",
                            required: true,
                            style: { gridColumn: '1/3' },
                            options: []
                        },
                        {
                            htmlFor: "state",
                            label: "State",
                            type: "select",
                            id: "state",
                            placeholder: "Choose state",
                            required: true,
                            style: {},
                            options: [
                                {
                                    option: "Maharashtra",
                                    value: "maharashtra"
                                },
                                {
                                    option: "Karnataka",
                                    value: "karnataka"
                                }
                            ]
                        },
                        {
                            htmlFor: "city",
                            label: "City",
                            type: "select",
                            id: "city",
                            placeholder: "Choose city",
                            required: true,
                            style: {},
                            options: [
                                {
                                    option: "Mumbai",
                                    value: "mumbai"
                                },
                                {
                                    option: "Thane",
                                    value: "thane"
                                }
                            ]
                        },
                        {
                            htmlFor: "pincode",
                            label: "Pincode",
                            type: "text",
                            id: "pincode",
                            placeholder: "Enter pincode",
                            required: true,
                            style: {},
                            options: []
                        },
                    ]
                }
            ]
        },
        {
            SECTION_NAME: "client-access",
            RADIO_OPTIONS: [
                {
                    name: "client_access_radio",
                    value: "client_access_yes",
                    label: "Yes"
                },
                {
                    name: "client_access_radio",
                    value: "client_access_no",
                    label: "No"
                }
            ],
            INITIAL_STATE: {
                client_admin_1_first_name: "",
                client_admin_1_last_name: "",
                client_admin_1_email_id: "",
                client_admin_1_mobile_no: "",
                client_admin_2_first_name: "",
                client_admin_2_last_name: "",
                client_admin_2_email_id: "",
                client_admin_2_mobile_no: "",
            },
            SECTION: [
                {
                    headline: "Client Admin #1:",
                    content: [
                        {
                            htmlFor: "client_admin_1_first_name",
                            label: "First Name",
                            type: "text",
                            id: "client_admin_1_first_name",
                            placeholder: "Enter first name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "client_admin_1_last_name",
                            label: "Last Name",
                            type: "text",
                            id: "client_admin_1_last_name",
                            placeholder: "Enter last name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "client_admin_1_email_id",
                            label: "Email ID",
                            type: "email",
                            id: "client_admin_1_email_id",
                            placeholder: "Enter email",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "client_admin_1_mobile_no",
                            label: "Mobile No.",
                            type: "text",
                            id: "client_admin_1_mobile_no",
                            placeholder: "Enter mobile no",
                            required: true,
                            style: {},
                            options: []
                        }
                    ]
                },
                {
                    headline: "Client Admin #2:",
                    content: [
                        {
                            htmlFor: "client_admin_2_first_name",
                            label: "First Name",
                            type: "text",
                            id: "client_admin_2_first_name",
                            placeholder: "Enter first name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "client_admin_2_last_name",
                            label: "Last Name",
                            type: "text",
                            id: "client_admin_2_last_name",
                            placeholder: "Enter last name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "client_admin_2_email_id",
                            label: "Email ID",
                            type: "email",
                            id: "client_admin_2_email_id",
                            placeholder: "Enter email",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "client_admin_2_mobile_no",
                            label: "Mobile No.",
                            type: "text",
                            id: "client_admin_2_mobile_no",
                            placeholder: "Enter mobile no",
                            required: true,
                            style: {},
                            options: []
                        }
                    ]
                }
            ]
        },
        {
            SECTION_NAME: "firm-access",
            INITIAL_STATE: {
                firm_admin_1_first_name: "",
                firm_admin_1_last_name: "",
                firm_admin_1_email_id: "",
                firm_admin_1_mobile_no: "",
                firm_admin_2_first_name: "",
                firm_admin_2_last_name: "",
                firm_admin_2_email_id: "",
                firm_admin_2_mobile_no: "",
            },
            RADIO_OPTIONS: [],
            SECTION: [
                {
                    headline: "Firm Admin #1:",
                    content: [
                        {
                            htmlFor: "firm_admin_1_email_id",
                            label: "Email ID",
                            type: "email",
                            id: "firm_admin_1_email_id",
                            placeholder: "Enter email",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "firm_admin_1_first_name",
                            label: "First Name",
                            type: "text",
                            id: "firm_admin_1_first_name",
                            placeholder: "Enter first name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "firm_admin_1_last_name",
                            label: "Last Name",
                            type: "text",
                            id: "firm_admin_1_last_name",
                            placeholder: "Enter last name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "firm_admin_1_mobile_no",
                            label: "Mobile No.",
                            type: "text",
                            id: "firm_admin_1_mobile_no",
                            placeholder: "Enter mobile no",
                            required: true,
                            style: {},
                            options: []
                        }
                    ]
                },
                {
                    headline: "Firm Admin #2:",
                    content: [
                        {
                            htmlFor: "firm_admin_2_email_id",
                            label: "Email ID",
                            type: "email",
                            id: "firm_admin_2_email_id",
                            placeholder: "Enter email",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "firm_admin_2_first_name",
                            label: "First Name",
                            type: "text",
                            id: "firm_admin_2_first_name",
                            placeholder: "Enter first name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "firm_admin_2_last_name",
                            label: "Last Name",
                            type: "text",
                            id: "firm_admin_2_last_name",
                            placeholder: "Enter last name",
                            required: true,
                            style: {},
                            options: []
                        },
                        {
                            htmlFor: "firm_admin_2_mobile_no",
                            label: "Mobile No.",
                            type: "text",
                            id: "firm_admin_2_mobile_no",
                            placeholder: "Enter mobile no",
                            required: true,
                            style: {},
                            options: []
                        }
                    ]
                }
            ]
        }
    ]
}