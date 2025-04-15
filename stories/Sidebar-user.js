import './sidebar-user.css';


export const createSidebar = ({
   variant,
}) => {
   const sidebarUser = document.createElement('main');
   sidebarUser.className = ['d-flex'].join(' ');
   sidebarUser.innerHTML = `
   <div class="sidebar sidebar-user ${variant === 'collapsed' ? 'collapsed' : ''}" id="sidebar-user">
      <div class="menu">
         <ul>
            <li class="sidebar-link">
               <a href="#">
                  <i class="icon-settings"></i>
                  <span>Settings</span>
               </a>
            </li>
            <li class="sidebar-link">
               <a href="#">
                  <i class="icon-notifications"></i>
                  <span>Notifications</span>
               </a>
               <span class="notifications">1</span>
            </li>
         </ul>
      </div>
      <div class="sidebar-footer">
         <div class="border-bottom">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
         </div>
         <div class="border-bottom">
            <p class="mb-0 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
         </div>
         <div class="border-bottom">
            <p class="mb-0 text-grey">Sed do eiusmod tempor incididunt ut labore et dolore </p>
         </div>
         <div class="border-bottom">
            <a class="btn btn-success btn-success--blue mt-3 w-100" href="">Sign Out</a>
         </div>
      </div>
   </div>
`
 
  
   
  return sidebarUser;
};



