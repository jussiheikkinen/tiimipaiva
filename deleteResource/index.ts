import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { connect, EmployeeModel } from "../src/mongo-adapter";

/*
curl --location --request DELETE 'http://localhost:7071/api/deleteResource' \
--header 'Content-Type: application/json' \
--data-raw '{ "name": "John" }'
*/

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const name = (req.query.name || (req.body && req.body.name));

    await connect();

    const saved = await EmployeeModel.deleteOne({ name: name });

    context.res = {
        status: 200, /* Defaults to 200 */
        body: saved,
    };

};

export default httpTrigger;