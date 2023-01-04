import { LoginUser } from "../db/loginUser"

declare global {
    namespace Express {
        export interface Request {
            user: Partial<LoginUser>
        }
    }
}