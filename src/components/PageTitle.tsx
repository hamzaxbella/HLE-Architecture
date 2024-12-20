interface PageTitleProps {
  label: {
    en: string;
    fr: string;
    ar: string;
  };
  locale: string;
}

const PageTitle = ({ label, locale }: PageTitleProps) => {
  const isRtl = locale === 'ar';

  return (
      <div className={`flex justify-between items-center gap-6 `}>
        <h1 className={`${locale === 'ar' ? 'font-cairo' : 'font-koho'} font-semibold text-2xl md:text-4xl md:font-bold uppercase`} dir={isRtl ? 'rtl' : 'ltr'}>
        {label[locale]}.
      </h1>      
      <div className="relative w-full h-full md:hidden">
        <div className="absoute bg-dark w-full h-[1px] lef bottom-0 -translate-y-1/2"></div>
        <div className={`absolute w-[5px] h-[5px] bg-dark rounded-full top-1/2 -translate-y-1/2 ${isRtl ? '-right-1' : '-left-1'}`}></div>
      </div>
    </div>
  )
}

export default PageTitle