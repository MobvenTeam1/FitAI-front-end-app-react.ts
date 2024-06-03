import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs("2022-04-17");

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return isSelected ? (
    <div className="single-chart">
      <svg
        viewBox="0 0 36 36"
        className="circular-chart"
        key={props.day.toString()}
      >
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke-dasharray="30, 100" // dimaic value
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </div>
  ) : (
    <PickersDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
    />
  );
}

export const CalendarView: React.FC = () => {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };
  return (
    <div className="border border-gray-50 shadow rounded-xl">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any,
          }}
          sx={{
            marginTop: "48px",
            marginBottom: "12px",
            // padding: "4px 0",
            // transform: "scale(1.1)",
            "& .circular-chart .circle": {
              stroke: "#a1d604",
            },
            "& .single-chart": {
              position: "relative",
            },
            "& .circular-chart": {
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(0, -2px)",
            },
            "& .circle-bg": {
              fill: "none",
              stroke: "#e8e8e7",
              strokeWidth: "1",
            },
            "& .circle": {
              fill: "none",
              strokeWidth: 2,
              strokeLinecap: "round",
              animation: "progress 1s ease-out forwards",
            },
            "& .MuiPickersDay-root": {
              "&.Mui-selected": {
                backgroundColor: "#A1D604",
              },
              "&.Mui-selected:active": {
                backgroundColor: "#A1D604 !important",
              },
              "&.Mui-selected:focus": {
                backgroundColor: "#A1D604 !important",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#A1D604 !important",
              },
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
