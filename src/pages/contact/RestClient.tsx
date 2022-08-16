export default class RestClient {


    static baseUrl = 'https://allamericanpayment-3c887-default-rtdb.firebaseio.com';

    static sendFormData(data: {
        name: string,
        email: string,
        phone: string,
        businessType: string,
        service: string

    }):Promise<any> {
        const url = `${this.baseUrl}/allAmericanPayment.json`

        async function sendForm() {
            const response = await fetch(url, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const result = response.ok;
            return result;
        }

        return sendForm();
    }

}