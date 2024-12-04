import  { FC, Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


interface ModalsearchProps {}

const Modalsearch: FC<ModalsearchProps> = () => {
  //Search functionality
  const [_show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const clickHandler = (_event:any) => {
      const searchResult = document.querySelector(".search-result");
      if (searchResult) {
        searchResult.classList.add("hidden");
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", clickHandler);
    };
  }, []);


  document.addEventListener("click", function () {
      document.querySelector(".search-result")?.classList.add("d-none");
  });



  const Removingdata=[
    {id:1, name:'People'},
    {id:2, name:'Pages'},
    {id:3, name:'Articles'},
    {id:4, name:'Tags'},
  ]
  const [items, setItems] = useState(Removingdata);

  const handleRemove = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return(
  <Fragment>
     <div id="search-modal" className="hs-overlay ti-modal hidden mt-[1.75rem]"  onClick={handleClose}>
    <div className="ti-modal-box">
      <div className="ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]">
        <div className="ti-modal-body">
  
          <div className="input-group border-[2px] border-primary rounded-[0.25rem] w-full flex">
            <a aria-label="anchor" href="#!"
              className="input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]"
              id="Search-Grid"><i className="fe fe-search header-link-icon text-[0.875rem]"></i></a>
  
            <input type="search" className="form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent"
              placeholder="Search" aria-label="Username"
              autoComplete="off"/>
  
            <a aria-label="anchor" href="#!" className="flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem]"
              id="voice-search"><i className="fe fe-mic header-link-icon"></i></a>
            <div className="hs-dropdown ti-dropdown">
              <a aria-label="anchor" href="#!"
                className="flex items-center hs-dropdown-toggle ti-dropdown-toggle btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]">
                <i className="fe fe-more-vertical"></i>
              </a>
              <ul className="absolute hs-dropdown-menu ti-dropdown-menu !-mt-2 !p-0 hidden">
                <li><a
                    className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                    href="#!">Action</a></li>
                <li><a
                    className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                    href="#!">Another action</a></li>
                <li><a
                    className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                    href="#!">Something else here</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a
                    className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                    href="#!">Separated link</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2">Are You Looking For...</p>
  
            {items.map((idx, index)=>(
            <span className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10 me-1" key={index}>
              <i className="fe fe-user me-2"></i>{idx.name}<a
                href="#!" className="tag-addon header-remove-btn" onClick={() => handleRemove(index)}><span className="sr-only">Remove badge</span><i className="fe fe-x"></i></a></span>
                ))}
  
          </div>
  
  
          <div className="my-[1.5rem]">
            <p className="font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2">Recent Search :</p>
  
            <div id="dismiss-alert" role="alert"
              className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert">
              <Link to="#"><span>Notifications</span></Link>
              <Link aria-label="anchor" className="ms-auto leading-none" to="#" data-hs-remove-element="#dismiss-alert"><i
                  className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></Link>
            </div>
  
            <div id="dismiss-alert1" role="alert"
              className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert">
              <Link to="#"><span>Alerts</span></Link>
              <Link aria-label="anchor" className="ms-auto leading-none" to="#" data-hs-remove-element="#dismiss-alert1"><i
                  className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></Link>
            </div>
  
            <div id="dismiss-alert2" role="alert"
              className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert">
              <Link to="#"><span>Mail</span></Link>
              <Link aria-label="anchor" className="ms-auto lh-1" to="#" data-hs-remove-element="#dismiss-alert2"><i
                  className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></Link>
            </div>
          </div>
        </div>
  
        <div className="ti-modal-footer !py-[1rem] !px-[1.25rem]">
          <div className="inline-flex rounded-md  shadow-sm">
            <button type="button"
              className="ti-btn-group !px-[0.75rem] !py-[0.45rem]  rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10">
              Search
            </button>
            <button type="button"
              className="ti-btn-group  ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]">
              Clear Recents
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
);}

export default Modalsearch;
