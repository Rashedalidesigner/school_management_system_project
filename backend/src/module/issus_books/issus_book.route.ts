import { Router } from "express";
import { IssusBooksController } from "./issus_book.controller";

const router = Router();

router.get("/issue-book", IssusBooksController.getIssusBooks);
router.get("/issue-book/:id", IssusBooksController.getIssusBooksbyId);
router.post("/issue-book", IssusBooksController.addIssusBooks);
router.patch("/issue-book/:id", IssusBooksController.updateIssusBooks);
router.delete("/issue-book/:id", IssusBooksController.deleteIssusBooks);

export const IssueBookRoute = router;