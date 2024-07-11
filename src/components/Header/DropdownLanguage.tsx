import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import languages from '../Dropdowns/languages';
import { get, map } from "lodash";
import i18n from '../../i18n';

const DropdownLanguage = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const currentLanguage: any = localStorage.getItem("I18N_LANGUAGE");
    setSelectedLang(currentLanguage);
  }, []);

  const changeLanguageAction = (lang: string) => {
    //set language as i18n
    i18n.changeLanguage(lang);
    localStorage.setItem("I18N_LANGUAGE", lang);
    setSelectedLang(lang);
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          to="#"
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        >
          <img
            src={get(languages, `${selectedLang}.flag`)}
            alt="dashonic"
            className='h-3.5'
          />
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-27 mt-2.5 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">
                Langauage
              </h5>
            </div>

            <div className="flex h-auto flex-col overflow-y-auto">
            {map(Object.keys(languages), key => (
            <div
              key={key}
              onClick={() => changeLanguageAction(key)}
              className={`flex gap-3 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 notify-item ${
                selectedLang === key ? "active" : "none"
              }`}
            >
              <img
                src={get(languages, `${key}.flag`)}
                alt="dashonic"
                className="h-5 mt-0.5"
              />
              <p className="align-middle">
                {get(languages, `${key}.label`)}
              </p>
            </div>
          ))}
            </div>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownLanguage;
