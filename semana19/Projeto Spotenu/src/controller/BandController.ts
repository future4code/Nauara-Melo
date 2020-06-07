import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { TokenGenerator } from "../services/tokenGenerator";

export class BandController {
  private static BandBusiness = new BandBusiness(
    new BandDatabase(),
    new TokenGenerator()
  );

  public async getAllBands(req: Request, res: Response) {
    try {
      const bands = await BandController.BandBusiness.getAllBands();

      res.status(200).send({ bands })
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async aprroveBand(req: Request, res: Response) {
    try {
      const id = req.params.id 
      const token = req.headers.authorization as string

      const result = await BandController.BandBusiness.approveBand(id, token);

      res.status(200).send({ message: "Aproved band"})
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
