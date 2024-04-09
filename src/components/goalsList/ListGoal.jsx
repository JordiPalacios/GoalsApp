import { SingleGoal } from "./SingleGoal"

const listMock = [{
    "id": 1,
    "details": "Do muscle training",
    "period": "week",
    "events": 5,
    "icon": "public/icons/gym.svg",
    "iconAlt": "gymSVG",
    "goal": 7,
    "deadline": "2025-12-31",
    "timesCompleted": 5,
},
{
    "id": 2,
    "details": "Eat healthy for 6 days",
    "period": "week",
    "events": 5,
    "icon": "public/icons/apple.svg",
    "iconAlt": "appleSVG",
    "goal": 6,
    "deadline": "2025-12-31",
    "timesCompleted": 5,
},
{
    "id": 3,
    "details": "Read 5 pages daily",
    "period": "week",
    "events": 4,
    "icon": "public/icons/book.svg",
    "iconAlt": "bookVG",
    "goal": 7,
    "deadline": "2025-12-31",
    "timesCompleted": 4,
},
{
    "id": 4,
    "details": "Schedule next day tasks",
    "period": "dayly",
    "events": 0,
    "icon": "public/icons/calendar.svg",
    "iconAlt": "calendarSVG",
    "goal": 1,
    "deadline": "2025-12-31",
    "timesCompleted": 0,
},
{
    "id": 5,
    "details": "Practice 15' coding daily",
    "period": "week",
    "events": 1,
    "icon": "public/icons/codePractice.svg",
    "iconAlt": "codePracticeSVG",
    "goal": 7,
    "deadline": "2025-12-31",
    "timesCompleted": 1,
},
{
    "id": 6,
    "details": "Listen 2 podcast a week",
    "period": "month",
    "events": 7,
    "icon": "public/icons/headset.svg",
    "iconAlt": "headsetSVG",
    "goal": 15,
    "deadline": "2025-12-31",
    "timesCompleted": 2,
},
{
    "id": 7,
    "details": "Run 5km",
    "period": "week",
    "events": 5,
    "icon": "public/icons/running.svg",
    "iconAlt": "runningVG",
    "goal": 7,
    "deadline": "2025-12-31",
    "timesCompleted": 5,
},
{
    "id": 8,
    "details": "Swim 3km daily",
    "period": "year",
    "events": 201,
    "icon": "public/icons/swimming.svg",
    "iconAlt": "swimmingVG",
    "goal": 325,
    "deadline": "2025-12-31",
    "timesCompleted": 201,
},
{
    "id": 9,
    "details": "Do 10k steps daily",
    "period": "month",
    "events": 31,
    "icon": "public/icons/walking.svg",
    "iconAlt": "walkingVG",
    "goal": 31,
    "deadline": "2025-12-31",
    "timesCompleted": 31,
},
{
    "id": 10,
    "details": "Do yoga for 30 minutes",
    "period": "week",
    "events": 7,
    "icon": "public/icons/yoga.svg",
    "iconAlt": "yogaVG",
    "goal": 7,
    "deadline": "2025-12-31",
    "timesCompleted": 2,
}]

export const ListGoal = () => {
    return (
        listMock.map( goal => <SingleGoal key={goal.id} {...goal} />)
    )
}