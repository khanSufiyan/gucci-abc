
module.exports = {
	server: {
		port: 3080
	},
	api: {
		default: {
			host: 'qa.optcentral.com',
			protocol: 'http'
		}
	},
	appData: {
		menuSectionsAPI: "//qa.optcentral.com/optportal/services/menuSections.json?login=omega_super&company=106",
		user: {
			login: 'omega_super',
			companyId: 106,
		},
        menu: {
            Home: 54,
        } 
	}

};
