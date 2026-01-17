// interfaces: contract between code components

interface HrManager {
    getAllSalaries(): string[]
}

interface ScrumMaster {
    holdScrumMeeting(): void
}

// now lets implement these interfaces

class SwissArmyKnife implements HrManager, ScrumMaster{

    getAllSalaries(): string[] {
        return []
    }
    holdScrumMeeting(): void {
        console.log('Holding scrum meeting ... ')
    }
}

class Project {
    name: string;
    budget: number;
    scrumMaster: ScrumMaster

    constructor(name: string, budget: number, scrumMaster: ScrumMaster){
        this.name = name;
        this.budget = budget;
        this.scrumMaster = scrumMaster;
    }

    holdProjectMeeting(){
        this.scrumMaster.holdScrumMeeting();
    }
}

const superManager = new SwissArmyKnife()
const basicProject = new Project('Basic project', 100, superManager)