import SvgColor from "../../../../components/svg-color";

type ConfirmationBannerProps = {
  message: string;
};

const ConfirmationBannerView: React.FC<ConfirmationBannerProps> = ({
  message,
}) => (
  <div className="absolute bottom-8 bg-green-500 rounded-xl flex items-center justify-center w-11/12 p-3 gap-2 text-black-900 transition ease-in-out delay-150 duration-300">
    <SvgColor src={`/src/assets/icons/ic_check-double.svg`} width={24} height={24} />
    <p className="text-base">{message}</p>
  </div>
);

export default ConfirmationBannerView;
