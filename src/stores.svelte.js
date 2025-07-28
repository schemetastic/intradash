import { bentoLayouts } from "./lib/static/bento-layouts-obj"

export const core = $state({
    mode: "dashboard",
    isMobile: false,
    currentBento: 0,
    selectedWidget: 0,
    nextBento: 3
})


export const modals = $state({
    parentWindow: false,
    renderChildren: "newBento",
    newBento: {
        title: "New Bento"
    },
    selectWidget: {
        title: "Select a Widget"
    },
    selectTeam: {
        title: "Select Team"
    }
})

export const profile = $state({
    firstName: "Jenna",
    lastName: "Adams",
    jobTitle: "Co-founder & Head of Strategy"
})

export const bentos = $state({
    "bento-0": {
        title: "Team Meeting",
        layout: "basic",
        widgets: [
            {
                type: "calendar",
                title: "Date",
                color: 4,
                props: {
                    date: new Date(2025, 7, 14)
                }
            },
            {
                type: "text-note",
                title: "Details",
                color: 2,
                props: {
                    content: `Main topic:
Remake of the company website

Define the best strategy to make it more appealing to clients

Zoom Meeting details:
id: 2134-5678-910
pass: DEVS_ROCK!
`
                }
            },
            {
                type: "select-team",
                title: "Team",
                color: 1,
                props: {
                    team: [0, 2, 5, 7, 6, 4]
                }
            }
        ]
    },
    "bento-1": {
        title: "Rebranding Project",
        layout: "4-equal",
        widgets: [
            {
                type: "select",
                title: "Title",
                color: 4,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 1,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 2,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 0,
                props: {}
            }

        ]
    },
    "bento-2": {
        title: "Copywriter Con",
        layout: "compound",
        widgets: [
            {
                type: "select",
                title: "Title",
                color: 4,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 2,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 1,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 0,
                props: {}
            },
            {
                type: "select",
                title: "Title",
                color: 5,
                props: {}
            }

        ]
    }
})
