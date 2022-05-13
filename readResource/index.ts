import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { connect, EmployeeModel } from "../src/mongo-adapter";

/*
curl --location --request GET 'http://localhost:7071/api/readResource?name=Jussi'
*/

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const name = (req.query.name || (req.body && req.body.name));

    await connect();

    const saved = await EmployeeModel.findOne({ name: name });

    context.res = {
        status: 200, /* Defaults to 200 */
        body: saved,
    };

};

export default httpTrigger;