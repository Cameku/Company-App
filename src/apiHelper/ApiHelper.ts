export class ApiHelper {
  async getApiKeyAsync(): Promise<string> {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');
    var x = await response.json();
    return x;
  }

  async getCompaniesAsync(key: string) {
    let url = 'https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key;
    console.log(' First response ' + url);
    const response = await fetch(url);
    // console.log(' First response ' + response);
    const compResponse = await response.json();
    //console.log('JSON response' + compResponse);
    return compResponse;
  }
}
