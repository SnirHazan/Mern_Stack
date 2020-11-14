const BaseUrl = 'http://localhost:4000/';

export const URLS = {
    BaseUrl,
    CreateEmployeeUrl: BaseUrl + 'employee/add',
    CreateEvent: BaseUrl + 'events/add',
    DeleteEmployeeUrl: id => BaseUrl + `employee/delete/${id}`,
    ReportUrl: date => BaseUrl + `report/${date}`,
};