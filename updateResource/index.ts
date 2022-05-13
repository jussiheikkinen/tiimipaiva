import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { connect, EmployeeModel } from "../src/mongo-adapter";

/*
curl --location --request POST 'http://localhost:7071/api/updateResource' \
--header 'Content-Type: application/json' \
--data-raw '{ "name": "Jussi", "new_name": "John" }'
*/

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const name = (req.query.name || (req.body && req.body.name));
    const new_name = (req.query.nanew_nameme || (req.body && req.body.new_name));
    
    await connect();

    const saved = await EmployeeModel.updateOne({ name: name }, { name: new_name });

    context.res = {
        status: 200, /* Defaults to 200 */
        body: saved,
    };

};

export default httpTrigger;