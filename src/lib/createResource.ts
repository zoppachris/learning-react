type Resource<T> = {
  read: () => T;
};

export function createResource<T>(promise: Promise<T>): Resource<T> {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let error: any;

  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      error = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw error;
      return result!;
    },
  };
}
