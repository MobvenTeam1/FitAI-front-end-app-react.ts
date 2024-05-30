import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface IRadialChartProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  labels?: string[];
  series?: number[];
}

const sizeToDimensions = {
  xs: { width: 100, height: 100 },
  sm: { width: 200, height: 200 },
  md: { width: 300, height: 300 },
  lg: { width: 400, height: 400 },
  xl: { width: 500, height: 500 },
  "2xl": { width: 600, height: 600 },
  "3xl": { width: 700, height: 700 },
  "4xl": { width: 800, height: 800 },
  "5xl": { width: 900, height: 900 },
};

export const RadialChart: React.FC<IRadialChartProps> = ({
  size = "md",
  labels = ["Goals"],
  series = [67],
}) => {
  const { width, height } = sizeToDimensions[size];

  const options: ApexOptions = {
    chart: {
      width: width,
      height: height,
      type: "radialBar",
    },

    series: series,
    colors: ["#B1EB04"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: "70%",
          background: "#fff",
        },
        track: {
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -16,
            color: "#1A1B10",
            fontSize: "14px",
          },
          value: {
            color: "#0B0B07",
            fontSize: "44px",
            fontWeight: "900",
            show: true,
          },
        },
      },
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#87D4F9"],
    //     stops: [0, 100],
    //   },
    // },
    stroke: {
      lineCap: "round",
    },
    labels: labels,
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type={options.chart?.type}
        height={options.chart?.height}
        width={options.chart?.width}
      />
    </div>
  );
};
