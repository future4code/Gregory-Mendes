import { v4 as uuidv4 } from 'uuid';

export default function generateId(): string {
    return uuidv4 ()
}