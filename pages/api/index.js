/* eslint-disable import/no-anonymous-default-export */

import dbConnect from "../../utils/dbConnect";
import CRUD from "../../models/crud";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { page = 1, limit = 6 } = req.query;
        const crud = await CRUD.find({})
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.status(200).json({ success: true, data: crud });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      
    case "POST":
      try {
        const crud = await CRUD.create(req.body);

        res.status(201).json({ success: true, data: crud });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
