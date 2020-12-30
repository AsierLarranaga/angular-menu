export class as_class_manager {

    as_removeAllElementsByClass(as_className) {

        const as_elements = document.getElementsByClassName(as_className);

        for (let i=0; i<as_elements.length; i++) {

            if (as_elements[i].classList.contains(as_className)) {

                as_elements[i].classList.remove(as_className);
            }
        }
    }

    as_showSecondElementByClass(as_firstElement, as_secondElement, as_sharedClassName, as_newClassName) {

        if (as_secondElement.classList.contains(as_sharedClassName)) {

            as_firstElement.classList.add(as_newClassName);
        
        } else {
            as_firstElement.classList.remove(as_newClassName);
        }
    }

    as_toggleElementClass(as_element, as_oldClassName, as_newClassName) {

        if (as_element.classList.contains(as_oldClassName)) {

            as_element.classList.remove(as_oldClassName);
        }
        as_element.classList.add(as_newClassName);
    }

    as_toggleElementsClass(as_elements, as_oldClassName, as_newClassName) {

        for (let i=0; i<as_elements.length; i++) {

            if (as_elements[i].classList.contains(as_oldClassName)) {

                as_elements[i].classList.remove(as_oldClassName);
            }
            as_elements[i].classList.add(as_newClassName);
        }
    }

    as_toggleAllElementsClass(as_sharedClassName, as_oldClassName, as_newClassName) {

        const as_elements = document.getElementsByClassName(as_sharedClassName);

        for (let i=0; i<as_elements.length; i++) {

            if (as_elements[i].classList.contains(as_oldClassName)) {

                as_elements[i].classList.remove(as_oldClassName);
            }
            as_elements[i].classList.add(as_newClassName);
        }
    }

    as_showElementsWhenScroll(as_sharedClassName, as_oldClassName, as_newClassName) {

        const as_elements = document.getElementsByClassName(as_sharedClassName);

        window.addEventListener('scroll', function() {

            for (let i=0; i<as_elements.length; i++) {
                
                if (window.pageYOffset >= as_elements[i].scrollTop) {

                    as_elements[i].classList.remove(as_oldClassName);
                    as_elements[i].classList.add(as_newClassName);

                } else if (window.pageYOffset <= as_elements[i].scrollTop) {

                    as_elements[i].classList.remove(as_newClassName);
                    as_elements[i].classList.add(as_oldClassName);
                }
            }
        });
    }
}