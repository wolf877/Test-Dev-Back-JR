import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";

const app = express();
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({error:err.message});
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3080, ()=>{console.log("listening on 3080")});

app.get("/hello", (req, res)=>{
    return res.send("Hellow Word")
});
