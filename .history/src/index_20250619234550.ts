import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();

app.use(cors());

async function getAllTables() {
  const result = await prisma.$queryRaw<
    { tablename: string }[]
  >`SELECT tablename FROM pg_tables WHERE schemaname = 'public'`;

  console.log(result.map((row) => row.tablename));
  return result.map((row) => row.tablename);
}

app.set("trust proxy", true);

app.get("/", async (req, res) => {
  const ip = req.ip || "unknown";

  try {
    //  await prisma.acces.create({
    //    data: {
    //      addres: ip
    //    },
    //  });

    const data = await prisma.acces.findFirst;
    res.send("IP address stored");
  } catch (error) {
    console.error("Error storing IP address:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/access", async (req: Request, res: Response) => {
  const ip = req.ip || "unknown"; // Ensure ip is always a string

  try {
    // Find the user with the given IP address
    const user = await prisma.acces.findFirst({
      where: {
        addres: ip,
      },
    });

    if (user) {
      res.json({
        msg: "user found",
        acces: "granted",
      });
    } else {
      res.json({
        msg: `No user with IP ${ip} found.`,
        acces: "denied",
      });
    }
  } catch (error) {
    console.error("Error finding user with IP address:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000);
