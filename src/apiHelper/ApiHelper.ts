export class ApiHelper {
  getApiKeyAsync = async (): Promise<string> => {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');

    if (!response.ok) {
      const message = 'Could not fetch the data, please try again...';
      throw new Error(message);
    }
    return await response.json();
  };

  getCompaniesAsync = async (key: string) => {
    const url = 'https://tqinterviewapi.azurewebsites.net/api/Companies?key=' + key;
    const response = await fetch(url);
    if (!response.ok) {
      const message = 'Could not fetch company data, please try again';
      throw new Error(message);
    }
    return await response.json();
  };

  /* 
  //// Normal function

    async getApiKeyAsync(): Promise<string> {
    const response = await fetch('https://tqinterviewapi.azurewebsites.net/api/Companies/key');
     return  await response.json();
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
  */
}
