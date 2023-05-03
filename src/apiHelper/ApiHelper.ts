export class ApiHelper {
  getApiKeyAsync = async (): Promise<string> => {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');
    return await response.json();
  };

  getCompaniesAsync = async (key: string) => {
    const url = 'https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key;
    const response = await fetch(url);
    const compResponse = await response.json();
    return compResponse;
  };

  /*   async getCompaniesAsync(key: string) {
    let url = 'https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key;
    console.log(' First response ' + url);
    const response = await fetch(url);
    // console.log(' First response ' + response);
    const compResponse = await response.json();
    //console.log('JSON response' + compResponse);
    return compResponse;
  }
 */

  /*   async getApiKeyAsync(): Promise<string> {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');
    var x = await response.json();
    return x;
  } */
}
