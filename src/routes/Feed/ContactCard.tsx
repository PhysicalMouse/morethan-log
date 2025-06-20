import styled from "@emotion/styled"
import React from "react"
import {
  AiFillYoutube,
  AiOutlineGithub,
  AiTwotoneMail,
} from "react-icons/ai";

import { SiPixiv } from "react-icons/si"
import { FaArtstation } from "react-icons/fa"



import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"





const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <Emoji>💬</Emoji> Contact
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub className="icon" />
            <div className="name">github</div>
          </a>
        )}
        {CONFIG.profile.Email && (
          <a
            href={`mailto:${CONFIG.profile.Email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiTwotoneMail className="icon" />
            <div className="name">Email</div>
          </a>
        )}
        {CONFIG.profile.Artstation && (
          <a
            href={`https://www.artstation.com/${CONFIG.profile.Artstation}`}
            rel="noreferrer"
            target="_blank"
          >
            <FaArtstation className="icon" />
            <div className="name">Artstation</div>
          </a>
        )}
        {CONFIG.profile.Pixiv && (
          <a
            href={`https://www.pixiv.net/users/${CONFIG.profile.Pixiv}`}
            rel="noreferrer"
            target="_blank"
          >
            <SiPixiv className="icon" />
            <div className="name">Pixiv</div>
          </a>
        )}
        {CONFIG.profile.YouTube && (
          <a
            href={`https://www.youtube.com/@${CONFIG.profile.YouTube}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillYoutube className="icon" />
            <div className="name">YouTube</div>
          </a>
        )}

      </StyledWrapper>
    </>
  )
}






export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
