export class Task {
    title: string;
    description: string;
    category: string;
    assigned: string;
    date: string;
    prio: string;

    constructor(obj?: any) { 
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description: '';
        this.category = obj ? obj.category : '';
        this.assigned = obj ? obj.assigned: '';
        this.date = obj ? obj.date : '';
        this.description = obj ? obj.description: '';
        this.prio = obj ? obj.prio: '';
    }

    public toJson() {
        return {
            title: this.title,
            description: this.description,
            category: this.category,
            assigned: this.assigned,
            date: this.date,
            prio: this.prio
        }
    }
}