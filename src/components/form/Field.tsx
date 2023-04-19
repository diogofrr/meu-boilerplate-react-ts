import { ErrorMessage } from './ErrorMessage';
import { FieldGroup } from './FieldGroup';
import { Input } from './Input';
import { Label } from './Label';
import { Popover } from '@mui/material';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { List } from '../structure/List';
import { Text } from '../structure/Text';

type TField = {
  label: string;
  fontSize: string;
  placeholder: string;
  type: string;
  htmlFor: string;
  registerOptions: any;
  register: any;
  errors: any;
  messages?: string[];
};

export const Field = ({
  label,
  fontSize,
  type,
  placeholder,
  htmlFor,
  errors,
  register,
  registerOptions,
  messages,
}: TField) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <FieldGroup>
      <Label fontSize={fontSize} htmlFor={htmlFor}>
        {label}
        <span
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <FontAwesomeIcon icon={faQuestionCircle} style={{ cursor: 'pointer', padding: '5px' }} />
        </span>
      </Label>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Text alignSelf="start" padding="2rem">
          O campo deve atender os seguintes requisitos:
        </Text>
        <List>
          {messages?.map((message, index) => (
            <li key={`${htmlFor}${index}`}>{message}</li>
          ))}
        </List>
      </Popover>
      <Input type={type} placeholder={placeholder} {...register(htmlFor, registerOptions)} />
      <ErrorMessage>{errors[htmlFor]?.message}</ErrorMessage>
    </FieldGroup>
  );
};
