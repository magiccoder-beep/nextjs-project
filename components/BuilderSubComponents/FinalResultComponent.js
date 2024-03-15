import SmileImg from '../../assets/smile.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const formattedValueNumber = (number) => {
    const result = number.toLocaleString('en', {
                    minimumFractionDigits: 2, // Minimum number of digits after the decimal point
                    maximumFractionDigits: 2, // Maximum number of digits after the decimal point
                    useGrouping: true, // Use grouping separator (comma)
                    });
    return result;
}
const formattedDayNumber = (number) => {
    const result = String(number).padStart(2, '0');
    return result;
}
export default function FinalResultComponent({ value, day }) {
  return (
    <div className='pl-24 pr-8 finalResultComponent'>
        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white lg:w-1/2"></div>
        <img src={SmileImg.src} alt="" className='w-8 h-8' />
        <h2 className="font-brand font-semibold text-subheading-3 text-brand-primary">Woow!</h2>
        <p className="font-brand mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Low investment, fast time!</p>
        <div className="font-brand relative text-left text-xl text-gray-600 my-4" style={{ width: 'fit-content' }}>
            Based on your info, we can
        </div>
        <div className='finalResultFlex'>
            <div className='finalResultComponent-Input'>
                <div className='label'>
                    Finish your project in
                </div>
                <div className='body'>
                    {formattedDayNumber(day)}<div className='subtitle'>days</div>
                </div>
            </div>
            <div className='finalResultComponent-Input'>
                <div className='label'>
                    With investment starting from
                </div>
                <div className='body'>
                    <div className='subtitle'>R$:</div>{formattedValueNumber(value)}
                </div>
            </div>
        </div>
        <div className='finalResultScheduleButton'>
            Schedule Free Consulting
        </div>
    </div>
  );
}
