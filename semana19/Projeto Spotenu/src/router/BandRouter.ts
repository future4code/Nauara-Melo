import express from "express";
import { BandController } from "../controller/BandController";


export const bandRouter = express.Router();

bandRouter.post("/approve/:id", new BandController().aprroveBand);
bandRouter.get("/all-bands", new BandController().getAllBands);


