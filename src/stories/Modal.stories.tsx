import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal } from '../components/modal/Modal';
import { Button } from '../components/button/Button';

export default {
  title: 'Example/Modal',
  component: Modal,
} as Meta;

export const BasicModal: Story = (args) => {
  return (
    <div style={{ height: '100vh' }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos et libero earum sed. Vero, optio vitae ipsam culpa autem consequatur repellendus porro! Debitis
        dolorum totam adipisci voluptas, saepe placeat.
      </p>
      <Button label="Denemelik"></Button>
      <Modal
        handleClose={() => null}
        isModalOpen
        content={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante diam, convallis in magna vitae, eleifend tempus sapien. Ut eu dolor urna. Nam eu interdum
              nunc. Vivamus tincidunt odio et auctor venenatis. Duis finibus nisi magna, vel commodo purus semper et. Sed dui eros, euismod non rutrum sit amet, iaculis et lacus.
              Phasellus mollis pharetra erat, eu porta massa mattis quis. Phasellus eu libero lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante diam, convallis in magna vitae, eleifend tempus sapien. Ut eu dolor urna. Nam eu interdum
              nunc. Vivamus tincidunt odio et auctor venenatis. Duis finibus nisi magna, vel commodo purus semper et. Sed dui eros, euismod non rutrum sit amet, iaculis et lacus.
              Phasellus mollis pharetra erat, eu porta massa mattis quis. Phasellus eu libero lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante diam, convallis in magna vitae, eleifend tempus sapien. Ut eu dolor urna. Nam eu interdum
              nunc. Vivamus tincidunt odio et auctor venenatis. Duis finibus nisi magna, vel commodo purus semper et. Sed dui eros, euismod non rutrum sit amet, iaculis et lacus.
              Phasellus mollis pharetra erat, eu porta massa mattis quis. Phasellus eu libero lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante diam, convallis in magna vitae, eleifend tempus sapien. Ut eu dolor urna. Nam eu interdum
              nunc. Vivamus tincidunt odio et auctor venenatis. Duis finibus nisi magna, vel commodo purus semper et. Sed dui eros, euismod non rutrum sit amet, iaculis et lacus.
              Phasellus mollis pharetra erat, eu porta massa mattis quis. Phasellus eu libero lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante diam, convallis in magna vitae, eleifend tempus sapien. Ut eu dolor urna. Nam eu interdum
              nunc. Vivamus tincidunt odio et auctor venenatis. Duis finibus nisi magna, vel commodo purus semper et. Sed dui eros, euismod non rutrum sit amet, iaculis et lacus.
              Phasellus mollis pharetra erat, eu porta massa mattis quis. Phasellus eu libero lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante diam, convallis in magna vitae, eleifend tempus sapien. Ut eu dolor urna. Nam eu interdum
              nunc. Vivamus tincidunt odio et auctor venenatis. Duis finibus nisi magna, vel commodo purus semper et. Sed dui eros, euismod non rutrum sit amet, iaculis et lacus.
              Phasellus mollis pharetra erat, eu porta massa mattis quis. Phasellus eu libero lorem.
            </p>
          </>
        }
      />
    </div>
  );
};
