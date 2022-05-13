import clsx from "clsx";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { MembersResponse } from "~/@types/cms/endpoints/MembersResponse";
import { Member } from "~/@types/cms/object/Member";
import { MainLayout } from "~/layout/MainLayout";
import { cmsClient } from "~/libs/cmsClient";
import { css } from "linaria";

type Props = {
  memberList: Member[];
};

const Members: NextPage<Props> = ({ memberList }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>メンバー紹介 | 学生団体with</title>
      </Head>
      <MainLayout>
        <div className={styles["memberListContainer"]}>
          <div className={clsx("container")}>
            <div className={clsx("row")}>
              <div className={clsx("col-md-12 text-center")}>
                <h2 className={clsx(styles["sectionTitle"])}>メンバー紹介</h2>
              </div>
              <div className={clsx("col-md-12")}>
                <div className={clsx(styles["memberList"])}>
                  {memberList.length != 0 ? (
                    memberList.map(
                      (member: Member): JSX.Element => (
                        <div className={clsx(styles["member"])} key={member.id}>
                          <div>
                            <img src={member.image.url} alt={member.name} className={clsx(styles["image"])} />
                          </div>
                          <div className={clsx(styles["info"])}>
                            <p className={clsx(styles["position"])}>{member.position}</p>
                            <p className={clsx(styles["belong"])}>{member.belong}</p>
                            <h3 className={clsx(styles["name"])}>{member.name}</h3>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <h3 className={styles["listEmpty"]}>現在作成中...</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (_context): Promise<{ props: Props }> => {
  const response: MembersResponse = await cmsClient.get<MembersResponse>({
    endpoint: "members",
    queries: { limit: 999 },
  });

  return {
    props: { memberList: response.contents },
  };
};

const styles = {
  memberListContainer: css`
    padding: 3em 0;
  `,
  sectionTitle: css`
    margin-bottom: 32px;
  `,
  memberList: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `,
  member: css``,
  image: css`
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: cover;
  `,
  info: css`
    margin-top: 8px;
  `,
  position: css`
    font-size: 12px;
    color: #7f7f7f;
    margin-bottom: 8px;
  `,
  belong: css`
    font-size: 12px;
    color: #7f7f7f;
    margin-bottom: 8px;
  `,
  name: css`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  `,
  listEmpty: css`
    text-align: center;
  `,
};

export default Members;
