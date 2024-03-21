import Datepicker from "tailwind-datepicker-react"
import {useState} from "react";
import {IOptions} from "tailwind-datepicker-react/types/Options";

const options: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-50 ",
        todayBtn: "bg-primary-600 hover:bg-primary-700",
        clearBtn: "bg-primary-600 text-white hover:bg-primary-700",
        icons: "bg-primary-600 text-white hover:bg-primary-700 hover:text-white mx-0.5",
        text: "",
        disabledText: "",
        input: "text-white",
        inputIcon: "text-white",
        selected: "bg-primary-600 text-white hover:bg-primary-700",
    },
    icons: {
        prev: () => <span>Previous</span>,
        next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "eng",
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
}

interface Props {
    setArticleBeginDate?: (articleBeginDate: Date) => void
    setArticleEndDate?: (articleEndDate: Date) => void
}

function DatePicker(props: Props) {
    const [show, setShow] = useState(false)
    const {setArticleBeginDate, setArticleEndDate,} = props
    const [selectedDate, setSelectedDate] = useState<Date | string>("")

    const handleChange = (selectedDate: Date) => {
        setSelectedDate(selectedDate.toLocaleDateString("fr"))

        if (setArticleBeginDate) {
            setArticleBeginDate(selectedDate)
        } else if (setArticleEndDate) {
            setArticleEndDate(selectedDate)
        }
    }
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    return (
        <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Choisir une date" value={selectedDate.toString()} onFocus={() => setShow(true)}
                       readOnly/>
            </Datepicker>
        </div>
    )
}

export default DatePicker;