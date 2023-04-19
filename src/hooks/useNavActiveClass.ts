export const useNavActiveClass = (
  styled: CSSModuleClasses,
  addedClass: string = 'link',
  activeClass: string = 'active'
) => {
  const activeClassName = ({isActive}: {isActive: Boolean}) =>
    isActive ? `${styled[addedClass]} ${styled[activeClass]}` : styled.link;

  return [activeClassName];
};
