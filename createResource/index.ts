import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { connect, EmployeeModel } from "../src/mongo-adapter";

/*
curl --location --request POST 'http://localhost:7071/api/createResource' \
--header 'Content-Type: application/json' \
--data-raw '{ "name": "Jussi" }'
*/

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const name = (req.query.name || (req.body && req.body.name));

    await connect();
    console.log(req)
    const user = new EmployeeModel();
    user.name = name;
    const saved = await user.save();

    context.res = {
        status: 200, /* Defaults to 200 */
        body: saved,
    };
};

export default httpTrigger;