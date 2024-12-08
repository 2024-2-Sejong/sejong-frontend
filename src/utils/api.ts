import axios from "axios";

// 메인 페이지 랭킹
export async function getMainRank() {
  try {
    const res = await axios.get(`/api/user/main`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 로그인, 회원가입

interface userJoinProps {
  username: string;
  password: string;
}

export async function userJoin({ username, password }: userJoinProps) {
  try {
    const res = await axios.post(`/api/user/create`, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function userLogin({ username, password }: userJoinProps) {
  try {
    const res = await axios.post(`/api/user/login`, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 초기 로그인 => 설문조사

interface categoryList {
  categoryId: string;
  difficulty: number;
}

interface userInitialLoginProps {
  token: string;
  initialData: categoryList[];
}

export async function userInitialLogin({
  token,
  initialData,
}: userInitialLoginProps) {
  try {
    const res = await axios.post(
      `/api/user/difficulty`,
      {
        initialData,
      },
      {
        headers: { Authorization: `${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 전체 스터디룸 조회
export async function getAllStudyRooms({ token }: { token: string | null }) {
  try {
    // 요청 헤더를 기본값으로 설정하고, token이 있을 경우 Authorization 헤더를 추가합니다.
    const headers = token ? { Authorization: `${token}` } : {};

    const res = await axios.get(`/api/user/studyroom`, {
      headers,
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching study rooms:", error);
    throw error; // 에러를 다시 던져서 호출한 쪽에서 처리할 수 있도록 합니다.
  }
}

// 스터디룸 생성

interface createStudyRoomProps {
  studyRoomName: string;
  studyRoomDescription: string;
  category: string[];
  token: string;
}

export async function createStudyRoom({
  studyRoomName,
  studyRoomDescription,
  category,
  token,
}: createStudyRoomProps) {
  try {
    const res = await axios.post(
      `/api/user/studyroom/create`,
      {
        studyRoomName,
        studyRoomDescription,
        category,
      },
      {
        headers: { Authorization: `${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 스터디룸 참가하기

interface joinStudyRoomProps {
  token: string;
  studyRoomId: string;
}

export async function joinStudyRoom({
  token,
  studyRoomId,
}: joinStudyRoomProps) {
  try {
    const res = await axios.post(
      `/api/user/studyroom/${studyRoomId}/join`,
      {},
      {
        headers: { Authorization: `${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 스터디룸 내부 상세 조회
export async function studyRoomDetail(studyRoomId: string) {
  try {
    const res = await axios.get(`/api/user/studyroom/${studyRoomId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 스터디룸별 문제 불러오기
export async function studyRoomProblem() {
  try {
    const res = await axios.post(`http://34.64.140.45:8000/recommand`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 문제제출 후 통계 갱신
interface completeProblemProps {
  studyRoomId: string;
  token: string;
}

export async function completeProblem({
  studyRoomId,
  token,
}: completeProblemProps) {
  try {
    const res = await axios.post(
      `/api/user/studyroom/${studyRoomId}/statistics`,
      {
        headers: { Authorization: `${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// 마이 페이지
export async function getUserInformation({ token }: { token: string }) {
  try {
    const res = await axios.get(`/api/user/mypage`, {
      headers: { Authorization: `${token}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
