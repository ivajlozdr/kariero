import React, { useEffect } from 'react';

const Navbar2 = () => {

  const onScroll = () => {
    const sections = document.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      (document.querySelector('body')?.scrollTop || 0);

    sections.forEach((elem) => {
      const value = elem.getAttribute('href') ?? '';
      const refElement = document.querySelector(value) as HTMLElement; // Cast to HTMLElement
      if (refElement) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      }
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    const location = document.getElementById(target!.substring(1))?.offsetTop;
    if (location !== undefined) {
      window.scrollTo({
        left: 0,
        top: location - 64,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const pageLinks = document.querySelectorAll('.side-menu__item');
    pageLinks.forEach((elem) => {
      elem.addEventListener('click', handleClick as unknown as EventListener);
    });

    return () => {
      // Clean up event listeners when the component unmounts
      pageLinks.forEach((elem) => {
        elem.removeEventListener('click', handleClick as unknown as EventListener);
      });
    };
  }, []);
  return (
    <>
      <ul className="main-menu">
        <li className="slide">
          <a className="side-menu__item active" href="#home">
            <span className="side-menu__label">Home</span> </a>
        </li>
        <li className="slide">
          <a href="#jobs" className="side-menu__item">
            <span className="side-menu__label">Jobs</span> </a> </li>
        <li className="slide"> <a href="#candidate" className="side-menu__item">
          <span className="side-menu__label">Candidates</span> </a> </li>
        <li className="slide"> <a href="#employers" className="side-menu__item">
          <span className="side-menu__label">For Employers</span> </a>
        </li>
        <li className="slide"> <a href="#career-advice" className="side-menu__item">
          <span className="side-menu__label">Career Advice</span> </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar2;
