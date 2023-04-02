import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const SideNavData = [
    {
        title: "Payments",
        icon: <AttachMoneyIcon />,
        link: "/manage/dashboard/payments"
    },
    {
        title: "Maintenance",
        icon: <EngineeringIcon />,
        link: "/manage/dashboard/maintenance"
    },
    {
        title: "Chat",
        icon: <QuestionAnswerIcon />,
        link: "/manage/dashboard/chat"
    },
    {
        title: "Documents",
        icon: <AutoStoriesIcon />,
        link: "/manage/dashboard/documents"
    }
]