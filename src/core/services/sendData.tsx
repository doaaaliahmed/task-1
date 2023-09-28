import axios from "axios";

class SendData {
  sendUserInformation(data: any, version: number, id: string) {
    return axios(
      `${process.env.NEXT_PUBLIC_END_POINT}/api/${version}/programs/${id}/application-form`,
      {
        method: "PUT",
        data,
      }
    );
  }
}

export default new SendData();
