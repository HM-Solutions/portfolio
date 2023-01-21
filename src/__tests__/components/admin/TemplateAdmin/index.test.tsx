import React from "react";
import { describe, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TemplateAdmin from "../../../../components/admin/TemplateAdmin";
import useAuthAdmin from "../../../../hooks/useAuthAdmin";
import sinon from "sinon";
import crypto from "../../../../patterns/api/crypto";
jest.mock("../../../../patterns/api/crypto");

describe("<TemplateAdmin/> test", () => {
  it("<TemplateAdmin/> unLogged", async () => {
    jest.mocked(crypto);
    sinon.stub(React, "useState").returns([true, jest.fn()]);
    const { container } = render(
      <TemplateAdmin>
        <>Content inside template</>
      </TemplateAdmin>
    );
    await container.getElementsByClassName("loadingAnimation");

    sinon.restore();
  });

  it("<TemplateAdmin/> logged", async () => {
    jest.mocked(crypto);
    sinon.stub(React, "useState").returns([false, jest.fn()]);
    sinon.stub(useAuthAdmin(), "isLoggedAdmin").returns(() => true);
    render(
      <TemplateAdmin>
        <>Content inside template</>
      </TemplateAdmin>
    );

    await screen.findByText("Content inside template");
    sinon.restore();
  });
});
