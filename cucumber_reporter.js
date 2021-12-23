const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/reports/cucumber',
    reportPath: 'cypress/reports/cucumber_reports/',
    metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Ebanq report',
        data: [
            {label: 'Project', value: 'Ebanq project'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: '1'},
            {label: 'Execution Start Time', value: 'Dec 20th 2021, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Dec 20 th 2021, 02:56 PM EST'}
        ]
    }
});