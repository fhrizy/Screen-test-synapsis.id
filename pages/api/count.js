/* eslint-disable import/no-anonymous-default-export */

import dbConnect from "../../utils/dbConnect";
import CRUD from "../../models/crud";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const count = await CRUD.count({});

        res.status(200).json({ success: true, data: count });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
