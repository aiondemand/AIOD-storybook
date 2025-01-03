import './button.css';

export const createButton = ({
  variant = 'primary-yellow',
  link,
  icon,
  label,
  onClick,
}) => {
  const btn = document.createElement('a');
  btn.href = link;
  btn.innerHTML = label +  `<i class="icon-${icon}"></i> ` ;

  if(variant === 'primary'){
   btn.className = ['btn', 'btn-default'].join(' ');
  }

  if(variant === 'primary-yellow'){
   btn.className = ['btn', 'btn-default', 'btn-default--yellow'].join(' ');
  }

  if(variant === 'secondary'){
   btn.className = ['btn', 'btn-secondary'].join(' ');
  }

  if(variant === 'secondary-yellow'){
   btn.className = ['btn', 'btn-secondary', 'btn-secondary--yellow'].join(' ');
  }
  
  if(variant === 'underline'){
   btn.className = ['btn', 'btn-success'].join(' ');
  }

  if(variant === 'circle'){
   btn.className = ['btn', 'btn-circle', 'btn-circle--yellow'].join(' ');
  }

  return btn;
};



