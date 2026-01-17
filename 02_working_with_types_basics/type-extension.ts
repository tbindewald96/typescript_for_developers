type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = SimpleJob & { 
    hasManyMeetings: true,
    reportsToBeCompleted: string[],
    codingLanguage: string
}

let complicatedJob: ComplicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

type MeetingHolder = {
    meetingMaxLength: number
    holdMeeting: () => void
}

class ProjectManager implements MeetingHolder {

    meetingMaxLength = 60;
    holdMeeting = () => {
        console.log('Just holding a meeting')
    }
}

export {}