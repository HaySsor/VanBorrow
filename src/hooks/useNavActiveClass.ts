export const useNavActiveClass = (styled: CSSModuleClasses) => {
  const activeClassName = ({isActive}: {isActive: Boolean}) =>
    isActive ? `${styled.link} ${styled.active}` : styled.link;

  return [activeClassName];
};
